
import container from '../../src/api/containers/subscription-container';

import { databaseConnect, databaseClose, databaseClear } from '../config/database';

beforeAll(async () => {
    await databaseConnect();
});

afterEach(async () => {
    await databaseClear();
});

afterAll(async () => {
    await databaseClose();
});


describe('Subscription use cases', () => {
    it('should create a new subscription', async () => {
        const subscription = await container.get('executers.subscription.create').run({
            email: 'new-email@mydomain.com',
            birthday: '1990-01-01',
            consent: 'TRUE',
        });
        expect(subscription).toHaveProperty('email');
        expect(subscription).toHaveProperty('birthday');
        expect(subscription).toHaveProperty('consent');
    });


    it('should create 2 subscriptions and retrieve number of rows inserted', async () => {
        const subscription = await container.get('executers.subscription.create').run({
            email: 'new-email@mydomain.com',
            birthday: '1990-01-01',
            consent: 'TRUE',
        });

        const subscription2 = await container.get('executers.subscription.create').run({
            email: 'second-email@mydomain.com',
            name: 'John Doe',
            birthday: '1979-01-01',
            consent: 'TRUE',
        });

        expect(subscription).toHaveProperty('email');
        expect(subscription2).toHaveProperty('email');


        const allSubscriptions = await container.get('executers.subscription.list').run();
        expect(allSubscriptions.length).toBe(2);
    });


    it('should create a new subscription and retrieve it', async () => {
        const subscription = await container.get('executers.subscription.create').run({
            email: 'new-email@mydomain.com',
            name: 'John Doe',
            birthday: '1990-01-01',
            consent: 'TRUE',
        });

        expect(subscription).toHaveProperty('email');

        const subscriptionRetrieved = await container.get('executers.subscription.getById').run(subscription.id);
        expect(subscriptionRetrieved).toHaveProperty('email');
        expect(subscriptionRetrieved.email).toBe(subscription.email);

    });


    it('should create a new subscription and cancel it', async () => {
        const subscription = await container.get('executers.subscription.create').run({
            email: 'new-email@mydomain.com',
            name: 'John Doe',
            birthday: '1990-01-01',
            consent: 'TRUE',
        });

        expect(subscription).toHaveProperty('email');
        const subscriptionRetrieved = await container.get('executers.subscription.getById').run(subscription.id);

        const subscriptionCancelled = await container.get('executers.subscription.cancelById').run(subscriptionRetrieved.id);
        expect(subscriptionCancelled).toBe(true);

    });


});