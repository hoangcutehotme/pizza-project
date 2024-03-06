const Product = require("../models/product");
const catchAsync = require("../utils/catchAsync");
const Category = require("../models/category");
const handleController = require("./handleController");
const ApiFeatures = require("../utils/ApiFeatures");
const appError = require("../utils/appError");
const fileUploader = require("../utils/uploadImage");

class ProductController {
  uploadProductImages = fileUploader.array("images", 10);
  // add Product
  addProduct = catchAsync(async (req, res, next) => {
    try {
      let cat = await Category.findOne({ catName: req.body.catName });
      if (!cat) return next(new appError("Không tìm thấy tên danh mục", 404));
      req.body.category = cat;
      let body = {
        ...req.body,
        images: req.files.map((image) => image.path),
      };
      const product = await Product.create(body);

      if (!product) return next(new appError("Không tạo được sản phẩm", 404));
      res.status(201).json({
        status: "success",
        data: product,
      });
    } catch (err) {
      if (req.files) {
        req.files.forEach((file) => cloudinary.uploader.destroy(file.filename));
      }
      next(new appError(err.message, 404));
    }
  });
  viewProduct = handleController.getOne(Product);
  deleteProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findByIdAndDelete({ _id: req.params.id });
    if (!product) {
      return next(new appError("Không thể tìm thấy sản phẩm", 404));
    }
    res.status(201).json("Đã xoá thành công");
  });
  updateProduct = catchAsync(async (req, res, next) => {
    console.log(req.body);
    let cat = await Category.findOne({
      catName: req.body.catName,
    });
    if (cat == null) cat = await Category.create({ catName: req.body.catName });
    req.body.category = cat;
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        data: product,
      },
    });
  });
  // View Products by Category
  viewProductsByCat = catchAsync(async (req, res, next) => {
    const products = await Product.find({
      "category.catName": req.query.catName,
    });
    res.status(200).json({
      status: "success",
      data: {
        data: products,
      },
    });
  });
  searchProduct = catchAsync(async (req, res, next) => {
    const products = await Product.find({
      name: { $regex: req.query.search, $options: "i" },
    }).sort("-ratingAverage");
    res.status(200).json({
      status: "success",
      data: {
        data: products,
      },
    });
  });
  // getProductByCat = catchAsync(async (req, res, next) => {
  //   const storeId = req.params.storeId;
  //   const products = await Product.find({ storeId: storeId }).aggregate([
  //     // { $unwind: "$category" },
  //     {
  //       $group: {
  //         _id: null,
  //         // name: "$category",
  //         productCount: { $sum: 1 },
  //         // productName: { $push: "$name" },
  //       },
  //     },
  //   ]);
  //   res.status(200).json({
  //     status: "success",
  //     length: products.length,
  //     data: {
  //       data: products,
  //     },
  //   });
  // });
  getAllProduct = catchAsync(async (req, res, next) => {
    const features = new ApiFeatures(Product.find({}), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const products = await features.query;
    res.status(200).json({
      status: "success",
      length: products.length,
      data: {
        data: products,
      },
    });
  });
}

module.exports = new ProductController();
