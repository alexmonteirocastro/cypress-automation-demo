/// <reference types="Cypress" />

import { apiEndpointBaseUrl, waitForGetRequest } from '../support/utils'

export const selectors = {
    pageHeaderTitle: '.StaticPageHeader_title__4VV_Y',
    pageHeaderIntro: '.StaticPageHeader_intro__1UN-T',
    blankslateIllustration: '.illustration--noLocation',
    enterManuallyButton: '.FieldSelect_textButton__3DF2A',
    findMeCtaButton: '.Button_cta__j4F7x',
    searchAddressInput: '#autocomplete-address',
    autoCompleteMenuItem: '.MenuItem_this__1-8Mo'
}

export const manualSearchForLocation = (location) => {
    cy.server()
    cy.route(`${apiEndpointBaseUrl}/location/search?*`).as('locationSearch')

    cy.get(selectors.enterManuallyButton).click()
    cy.get(selectors.searchAddressInput).focus().type(location)
    cy.get(selectors.autoCompleteMenuItem).eq(0).should('contain', location).click()
    waitForGetRequest('locationSearch')
}

export const findCurrentLocation = () => {
    cy.get(selectors.findMeCtaButton)
}