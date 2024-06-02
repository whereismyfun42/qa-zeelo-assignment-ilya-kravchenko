describe('CreateBooking API Tests', () => {
    const baseUrl = 'https://restful-booker.herokuapp.com';
    const endpoint = '/booking';
    
    // Utility function to create a booking
    const createBooking = (bookingData) => {
        return cy.request({
            method: 'POST',
            url: `${baseUrl}${endpoint}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: bookingData,
            failOnStatusCode: false
        });
    };
    
    // Test data
    const validBookingData = {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    };
    
    it('should create a booking with valid data', () => {
        createBooking(validBookingData).then(response => {
            // Assert response status
            expect(response.status).to.eq(200);

            // Assert response structure
            expect(response.body).to.have.property('bookingid');
            expect(response.body).to.have.property('booking');
            expect(response.body.booking).to.include.all.keys('firstname', 'lastname', 'totalprice', 'depositpaid', 'bookingdates', 'additionalneeds');
            expect(response.body.booking.bookingdates).to.include.all.keys('checkin', 'checkout');
            
            // Assert response data matches input data
            expect(response.body.booking.firstname).to.eq(validBookingData.firstname);
            expect(response.body.booking.lastname).to.eq(validBookingData.lastname);
            expect(response.body.booking.totalprice).to.eq(validBookingData.totalprice);
            expect(response.body.booking.depositpaid).to.eq(validBookingData.depositpaid);
            expect(response.body.booking.bookingdates.checkin).to.eq(validBookingData.bookingdates.checkin);
            expect(response.body.booking.bookingdates.checkout).to.eq(validBookingData.bookingdates.checkout);
            expect(response.body.booking.additionalneeds).to.eq(validBookingData.additionalneeds);
        });
    });

    it('should create a booking without optional fields', () => {
        const bookingData = { ...validBookingData };
        delete bookingData.additionalneeds;

        createBooking(bookingData).then(response => {
            // Assert response status
            expect(response.status).to.eq(200);

            // Assert response structure
            expect(response.body).to.have.property('bookingid');
            expect(response.body).to.have.property('booking');
            expect(response.body.booking).to.include.all.keys('firstname', 'lastname', 'totalprice', 'depositpaid', 'bookingdates');
            expect(response.body.booking.bookingdates).to.include.all.keys('checkin', 'checkout');
            expect(response.body.booking).to.not.have.property('additionalneeds');
            
            // Assert response data matches input data
            expect(response.body.booking.firstname).to.eq(bookingData.firstname);
            expect(response.body.booking.lastname).to.eq(bookingData.lastname);
            expect(response.body.booking.totalprice).to.eq(bookingData.totalprice);
            expect(response.body.booking.depositpaid).to.eq(bookingData.depositpaid);
            expect(response.body.booking.bookingdates.checkin).to.eq(bookingData.bookingdates.checkin);
            expect(response.body.booking.bookingdates.checkout).to.eq(bookingData.bookingdates.checkout);
        });
    });

    it('should return error for missing required fields', () => {
        const invalidBookingData = { ...validBookingData };
        delete invalidBookingData.firstname;

        createBooking(invalidBookingData).then(response => {
            // Assert response status
            expect(response.status).to.eq(400);
        });
    });

    it('should return error for invalid data types', () => {
        const invalidBookingData = { ...validBookingData, totalprice: "one hundred eleven" };

        createBooking(invalidBookingData).then(response => {
            // Assert response status
            expect(response.status).to.eq(400);
        });
    });

    it('should return error for invalid date format', () => {
        const invalidBookingData = { 
            ...validBookingData, 
            bookingdates: {
                checkin: "01-01-2018", // Invalid date format
                checkout: "01-01-2019"
            }
        };

        createBooking(invalidBookingData).then(response => {
            // Assert response status
            expect(response.status).to.eq(400);
        });
    });
});
