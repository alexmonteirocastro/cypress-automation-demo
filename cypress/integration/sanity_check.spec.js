/// <reference types="Cypress" />

import * as welcomePage from '../page_objects/welcome.page'
import * as languageSettings from '../page_objects/languageSettings.page'
import * as searchPage from '../page_objects/search.page'
import { expectElementToBeVisible, expectUrlToContain } from '../support/utils'

describe('Basic sanity check for the JemJar application', () => {
    beforeEach(() => {
       welcomePage.visitWelcomePage()
    })

    it('Enters the Welcome Page', () => {
        expectUrlToContain('welcome')
        expectElementToBeVisible(welcomePage.selectors.logoSubtitle)
        expectElementToBeVisible(welcomePage.selectors.consentDisclaimer)
        expectElementToBeVisible(welcomePage.selectors.languageBadge)
        expectElementToBeVisible(welcomePage.selectors.registerButton)
        expectElementToBeVisible(welcomePage.selectors.skipButton)
    })

    it('Switches Languages', () => {
        welcomePage.expectSelectedLanguageToBe('en-US')
        languageSettings.switchToLanguage('zh-CN')
        languageSettings.switchToLanguage('en-GB')
    })

    it('Skips registration and searches for sites in London', () => {
        cy.get(welcomePage.selectors.skipButton).click()
        expectUrlToContain('search')
        expectElementToBeVisible(searchPage.selectors.pageHeaderTitle)
        expectElementToBeVisible(searchPage.selectors.pageHeaderIntro)
        expectElementToBeVisible(searchPage.selectors.blankslateIllustration)
        expectElementToBeVisible(searchPage.selectors.findMeCtaButton)
        searchPage.manualSearchForLocation('London')
    })
})