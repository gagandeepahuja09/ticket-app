/* 

DB Design: 
    1. User: Email, Password
    2. Ticket: Title, Price, UserId, OrderId
    3. Order: UserId, TicketId, status(Created, Cancelled, Awaiting Payment, Completed), expiresAt
    4. Charge: OrderId, Amount, StripeId, StripeRefundId, status(Create | Failed | Completed)

Services:
    1. auth 
    2. tickets -> Creation / Editing
    3. Orders -> Creation / Editing
    4. Expiration -> Watches for orders to be created & cancels them after 15 minutes
    5. Payments
    
* It's not necessary that we have a separate service for each resource.

Events:
    1. User Created     2. User Updated
    3. Order Created    4. Order Cancelled      5. Order Expired
    6. Ticket Created   7. Ticket Updated
    8. Charge Created

    * client --> Next.js
    * All services will be connected through a common library and throught NATS Streaming Server(Event Bus)
    * For expiration service, we will also use redis
    * Really hard to remember, what properties an event should have ---> Write everything in TypeScript
*/