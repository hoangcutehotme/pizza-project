import React, { useCallback, useEffect, useState } from 'react'
import './style.css'
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
import { fetchAllProduct, deleteProduct, getSearchProduct } from '../../service/productService'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModelAddProduct from './ModelAddProduct';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModelDetailProduct from './ModelDetailProduct';
import ModelConfirm from './ModelConfirm';
import { toast } from 'react-toastify';
import LoadingModel from '../../component/Loading/Loading'
import debounce from 'lodash/debounce';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TableProduct = () => {

    const notify = (er, message) => toast[er](message, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const [isLoading, setIsLoading] = useState(false);
    // pagination
    const [listProducts, setListProducts] = useState([]);
    const [indexPage, setIndexPage] = useState(0);
    const [pageCount, setPageCount] = useState(3);
    // const pageCount = 4;
    const [isShowAddProduct, setIsShowAddProduct] = useState(false);
    const [isShowDetailProduct, setIsShowDetailProduct] = useState(false);
    const [isShowConfirm, setIsShowConfirm] = useState(false);
    const [productDetail, setProductDetail] = useState({});
    const [idDelete, setIdDelete] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handlePageClick = (event) => {
        getProducts(+event.selected + 1);
        setIndexPage(event.selected);
    };

    const handleClose = () => {
        setIsShowAddProduct(false);
        setIsShowDetailProduct(false);
        setIsShowConfirm(false);
        setIdDelete(null);
        getProducts(indexPage + 1);
    }

    useEffect(() => {

        if (searchTerm.trim() !== '') {
            console.log("zel");
            debounceSearch(searchTerm);
        } else {
            getProducts(1);
        }

    }, [searchTerm])

    const getProducts = async (page) => {
        try {
            let res = await fetchAllProduct(page);
            if (res && res.data && res.data.data) {
                setListProducts(res.data.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    const handleShowDetail = (item) => {

        setIsShowDetailProduct(true);
        setProductDetail(item);

    }

    const handleShowConfirm = (id) => {
        console.log("show");
        setIsShowConfirm(true);
        setIdDelete(id);
    }
    // search 
    const debounceSearch = useCallback(debounce((nextValue) => searchProduct(nextValue), 700), [])

    const searchProduct = async (searchTerm) => {
        try {
            const response = await getSearchProduct(searchTerm);

            if (response && response.data && response.data.data) {
                setListProducts(response.data.data.data);
            }

        } catch (error) {
            console.error('Error searching for products:', error);
        } finally {
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        debounceSearch(event.target.value);
    };

    const handDeleteProduct = async (id) => {
        setIsLoading(true);
        try {
            await deleteProduct(id);
            notify("success", "Xoá sản phẩm thành công");
        } catch (error) {
            console.error('Error deleting product:', error);
            notify("error", "Xoá sản phẩm không thành công");
        } finally {
            setIsLoading(false);
            handleClose();
        }
    }

    return (
        <>
            <Container fluid>
                <div style={{ backgroundColor: 'white' }}>
                    <h3>Danh sách món ăn</h3>
                    {/* Search */}
                    <div >
                        <input
                            type="text"
                            placeholder="Tìm kiếm món ăn..."
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', margin: '20px' }} >
                            <Button as="input" type="button" value="Thêm sản phẩm" onClick={() => setIsShowAddProduct(true)} />
                        </div>
                    </div>





                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th style={{ width: '50px' }}>STT</th>
                                <th>Tên món</th>
                                {/* <th>Hình ảnh</th> */}
                                <th>Giá</th>
                                <th>Danh mục</th>
                                <th>Còn hàng</th>
                                <th>Trạng thái</th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProducts && listProducts.length > 0 && (
                                // Render table rows if listProducts is not empty
                                listProducts.map((item, index) => (
                                    <tr key={`product-${indexPage * 10 + index}`} >
                                        <td>{indexPage * 10 + index + 1}</td>
                                        <td>{item.name}</td>
                                        {/* <td>
                                            {
                                                <img src={item.images[0]} alt={item.images[0]} width={'35%'} />
                                            }
                                        </td> */}

                                        <td>{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                        <td>{item.category.catName}</td>
                                        <td>{item.isOutofOrder ? (
                                            <span style={{ color: 'red', fontWeight: 600 }}>Hết hàng</span>
                                        ) : (
                                            <span style={{ color: 'green', fontWeight: 600 }}>Còn hàng</span>
                                        )}</td>
                                        <td>
                                            {item.isAvailable ? (
                                                <span style={{ color: 'green', fontWeight: 600 }}>
                                                    <FontAwesomeIcon icon={faCircle} size='2xs' />  Hoạt động
                                                </span>
                                            ) : (
                                                <span style={{ color: 'red', fontWeight: 600 }}>
                                                    <FontAwesomeIcon icon={faCircle} size='2xs' /> Ngừng bán
                                                </span>
                                            )}
                                        </td>

                                        <td>
                                            <button className='btn btn-warning my-1 mx-2 button-text' onClick={() => handleShowDetail(item)}>Chi tiết</button>
                                            <button className="btn btn-danger my-1 mx-2 button-text" onClick={() => handleShowConfirm(item.id)}>Xoá</button>
                                        </td>
                                    </tr>
                                ))
                            )}



                        </tbody>

                    </Table>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>



                        <div className='justify-content-right'>
                            <ReactPaginate
                                nextLabel=" > "
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={pageCount}
                                previousLabel=" < "
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                containerClassName="pagination"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </div>

                    <ModelAddProduct show={isShowAddProduct} handleClose={handleClose} />
                    <ModelDetailProduct show={isShowDetailProduct} handleClose={handleClose} product={productDetail} />
                    <ModelConfirm show={isShowConfirm} handleClose={handleClose} handleConfirmDelete={handDeleteProduct} id={idDelete} />
                </div>


            </Container>

            {/* <ToastContainer /> */}
            {isLoading && (<LoadingModel />)}
        </>




    )
}

export default TableProduct
