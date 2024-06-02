describe('OpenCart Search and Sort', () => {
    beforeEach(() => {
      // Visit the OpenCart website before each test
      cy.visit('/')
    })
  
    it('Searches for iPod and sorts results in descending order', () => {
      // Search for "iPod"
      cy.get('input[name="search"]').type('iPod')
      cy.get('.btn-default.btn-lg').click()
  
      // Verify search results contain "iPod"
      cy.get('.product-layout .product-thumb').should('contain.text', 'iPod')
  
      // Sort results by price descending
      cy.get('#input-sort').select('Price (High > Low)')
  
      // Verify the sorting by checking the prices are in descending order
      let prices = []
      cy.get('.product-thumb .price').each(($el) => {
        const priceText = $el.text().trim()
        const price = parseFloat(priceText.replace('$', '').replace(',', ''))
        prices.push(price)
      }).then(() => {
        const sortedPrices = [...prices].sort((a, b) => b - a)
        expect(prices).to.deep.equal(sortedPrices)
      })
    })
  })
  