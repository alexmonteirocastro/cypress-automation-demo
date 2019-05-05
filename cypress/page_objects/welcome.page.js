/// <reference types="Cypress" />

import { apiEndpointBaseUrl, waitForGetRequest, expectElementInnerTextToBe } from '../support/utils'

export const selectors = {
    jemJarLogo: '.illustration illustration--jemjarLogo',
    logoSubtitle: '.Logo_subtitle__2oziO',
    languageBadge: '.Language_badge__6xyd9',
    languageLabel: '.Language_label__2XNMQ',
    consentDisclaimer: '.AuthButtons_consent__3lgT0',
    customLink: '#custom-link',
    registerButton: '#dual-buttons__Register',
    skipButton: '#dual-buttons__Skip'
}

export const visitWelcomePage = () => {
    cy.server()
    cy.route(`${apiEndpointBaseUrl}/app/init*`).as('initApp')
    cy.visit('/')
    waitForGetRequest('initApp')
}

export const clickOnLanguageBadge = () => {
    cy.get(selectors.languageBadge).click()
}

export const expectSelectedLanguageToBe = (languageCode) => {
    expectElementInnerTextToBe(selectors.languageLabel, languageCode)
}