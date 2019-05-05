export const apiEndpointBaseUrl = 'https://api.jemjar.com'

export const waitForGetRequest = (xhr) => {
    return cy.wait(`@${xhr}`).its('status').should('equal', 200)
}

export const expectElementToBeVisible = (elementSelector) => {
    cy.get(elementSelector).should('be.visible')
}

export const expectUrlToContain = (term) => {
    cy.url().should('contain', term)
}

export const expectElementInnerTextToBe = (elementSelector, expectedInnerText) => {
    cy.get(elementSelector).invoke('text').should('equal', expectedInnerText)
}