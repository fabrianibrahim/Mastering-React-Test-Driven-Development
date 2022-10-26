import React from 'react';
import ReactDOM from "react-dom";
import { Appointment } from "../src/Appointment";

const data = {
    customer: { firstName: 'Ashley', lastName: 'Jones', phoneNumber: '(123) 555-0123' },
    stylist: 'Jay Speares',
    startsAt: '2019-02-02 09:30',
    service: 'Cut',
    notes: ''
};

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        const component = <Appointment customer={customer} />;
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(component, container);
        expect(document.body.textContent).toMatch('Ashley');
    })

    it('renders another customer first name', () => {
        const customer = { firstName: 'Jordan' };
        const container = document.createElement('div');
        ReactDOM.render(<Appointment customer={customer} />, container);
        expect(container.textContent).toMatch('Jordan');
    })
})