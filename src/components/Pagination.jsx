import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class PaginationBar extends React.Component {
  render() {
    return (
        <nav aria-label="Page navigation example" class="mt-2 mr-2"> 
        <ul className="pagination justify-content-end">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}
