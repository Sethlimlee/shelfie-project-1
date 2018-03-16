module.exports = {

    getAll: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
            .then(products => res.status(200).send(products))
                .catch(() => res.status(500).send())
    },
    
    addProduct: (req, res, next) => {
        const db = req.app.get('db')
        const {product} = req.body;

        db.add_product([product])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    }
}