/// <reference types="Cypress" />

import * as welcomePage from './welcome.page'
import { expectUrlToContain } from '../support/utils'

export const selectors = {
    languageLabel: '#label__lang__'
}

export const switchToLanguage = languageCode => {
    welcomePage.clickOnLanguageBadge()
    expectUrlToContain('language')
    cy.get(selectors.languageLabel + languageCode).click()
    welcomePage.expectSelectedLanguageToBe(languageCode)
}