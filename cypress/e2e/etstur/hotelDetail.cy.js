describe('Usage of xpath on test cases', function(){
    beforeEach(function(){
      cy.viewport(1920, 1200)
      cy.visit('https://www.etstur.com/')
    })
    it("Hotel detail page on new tab", function(){
      cy.xpath('//input[@id="tb-autocomplete"]').click() //Otel arama
      cy.xpath('//input[@id="tb-autocomplete"]').type('Bodrum') //Otel ya da bölge ismi yazılır.
      cy.wait(1000)
      cy.xpath('(//b[@style="font-weight: bold;"][contains(text(),"Bodrum")])[1]').click()  //Gelen ilk sonuç
      cy.xpath('//div[@id="checkIn"]').click() //Tarih seçimi
      cy.xpath('(//form[@id="sf-hotelSearchForm"]//td[contains(text()," 26 ")])[1]').click()
      cy.xpath('(//form[@id="sf-hotelSearchForm"]//td[contains(text()," 28 ")])[1]').click()
      cy.xpath('//button[@type="button"][contains(text(),"ARA")]').click() //Ara butonu
      cy.wait(1000)
      cy.xpath('(//a[@class="ecommerce-push"])[1]').invoke('removeAttr','target').click() //Listeden gelen ilk otel
      cy.xpath('//div[@class="hotel-name"]').contains('Bodrum, Muğla')
        .end()
      })
  })