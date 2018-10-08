const express = require('express');

const router = express.Router();


//GET request
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched',
        
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order Created',
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    const orderid=req.params.orderId;
    res.status(200).json({
        message: 'Order of the ID was fetched',
        id: orderid
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order of the ID was deleted',
    });
});

module.exports = router;