import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.route('**/users/**', route => {
    const url = route.request().url()

    if (url.endsWith('/register')) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ id: '1' })
      })
    }

    if (url.endsWith('/request')) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: '{}'
      })
    }

    if (url.endsWith('/login')) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'b6be78b7-3b9e-4d25-8479-d0c084d0ba16',
          firstName: 'Mighty',
          lastName: 'Michigander'
        })
      })
    }

    route.abort()
  })
})

test('full auth happy path (register -> request -> login -> logged)', async ({ page }) => {
  // register assertion
  await page.goto('/')

  await page.fill('input[placeholder="First name"]', 'Mighty')
  await page.fill('input[placeholder="Last name"]', 'Michigander')
  await page.fill('input[placeholder="Email"]', 'Mighty.Michigander@example.com')
  await page.getByTestId('submit-btn').click()

  await expect(page).toHaveURL('/request')

  // request code assertion
  await page.fill('input[placeholder="Email"]', 'Mighty.Michigander@example.com')
  await page.getByTestId('submit-btn').click()

  await expect(page).toHaveURL('/login')

  // login assertion
  await page.fill('input[placeholder="Email"]', 'Mighty.Michigander@example.com')
  await page.fill('input[placeholder="6-digit code"]', '123456')
  await page.getByTestId('submit-btn').click()

  await expect(page).toHaveURL('/logged')

  // logged page assertion
  await expect(
    page.getByText(/Logged/i)
  ).toBeVisible()
})