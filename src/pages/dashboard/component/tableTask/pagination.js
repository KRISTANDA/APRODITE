const Pagination = () => {
    return(
        <div className="d-flex justify-content-between mt-4">
            <p>Showing 1 to 5 of 100 entries</p>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <i class="bx bx-left-arrow-alt"></i> Previous
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            Next <i class="bx bx-right-arrow-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination