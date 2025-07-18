const express = require('express');
const router = express.Router();
const { homeProducts , category, getProductBySlug}=require("../../controllers/clients/productsController");
const {middlewareCaterory} = require("../../middleware/client/category.middleware");
// Route con cho /products
// router.get('/', (req, res) => {
//   res.render('clients/pages/products/index'); // Render trang danh sách sản phẩm
// });
router.get('/',  homeProducts);

router.get("/:slugCategory" , category)

router.get("/detail/:slugProduct" , getProductBySlug)



module.exports = router;