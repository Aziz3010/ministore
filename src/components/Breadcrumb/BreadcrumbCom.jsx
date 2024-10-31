import React from 'react';
import { Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';

const BreadcrumbCom = ({ isCategory = false }) => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  return (
    <Col sm={isCategory ? 10 : 4}>
      <Breadcrumb className='w-fit static'>
        {pathParts.map((part, index) => {
          const routeTo = `/${pathParts.slice(0, index + 1).join("/")}`;
          const isLast = index === pathParts.length - 1;

          return (
            <Breadcrumb.Item 
              key={index} 
              className={`breadcrumb-item capitalize ${isLast ? 'active' : ''}`} 
              href={part === "category" ? '/products/categories' : routeTo}
            >
              {part}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </Col>
  );
};

export default BreadcrumbCom;
