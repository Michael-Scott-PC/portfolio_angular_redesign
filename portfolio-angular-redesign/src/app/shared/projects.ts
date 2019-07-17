import { Proj } from './proj';

export const PROJECTS: Proj[] = [
    {
        id: '1',
        image: '/assets/images/hp_order_status_code.PNG',
        label: 'Order Status Checker Pt. 1',
// tslint:disable-next-line: max-line-length
        description: 'Part of my current job is providing faculty and staff with order status updates on their computer related items. This is a time consuming process that takes a few hours every week. I\'ve set out to create a program that could collect this data with nothing more than entering the order number. This is the first half of the Python script I wrote for this program.'
    },
    {
        id: '2',
        image: '/assets/images/hp_order_status_code2.PNG',
        label: 'Order Status Checker Pt. 2',
// tslint:disable-next-line: max-line-length
        description: 'So far this program has drastically reduced the amount of clicks, visual scanning, and typing I have to do to retrieve order statuses. I plan to expand this to all orders from all of our vendors so we can reduce this task to a dozen minutes or less.'
    },
    {
        id: '3',
        image: '/assets/images/mws_index.jpg',
        label: 'End Goal: HP Order Tracker',
// tslint:disable-next-line: max-line-length
        description: 'The idea is for this program to benefit not only my coworkers and myself, but also the customers by feeding the data to a SQLite database, then rendering that data via Django into a user interface.'
    }
];
