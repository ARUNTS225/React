import React from 'react'

function Card({data}) {
  return <>
  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.isusers?"":"text-muted"}><span className="fa-li"><i className={data.isusers?"fas fa-check":"fas fa-times"}></i></span>{data.users}</li>
              <li className={data.isstorage?"":"text-muted"}><span className="fa-li"><i className={data.isstorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.isPublicProjects?"":"text-muted"}><span className="fa-li"><i className={data.isPublicProjects?"fas fa-check":"fas fa-times"}></i></span>{data.PublicProjects}</li>
              <li className={data.iscommunicationAccess?"":"text-muted"}><span className="fa-li"><i className={data.iscommunicationAccess?"fas fa-check":"fas fa-times"}></i></span>{data.communicationAccess}</li>
              <li className={data.isprivateProjects?"":"text-muted"}><span className="fa-li"><i className={data.isprivateProjects?"fas fa-check":"fas fa-times"}></i></span>{data.privateProjects}</li>
              <li className={data.isphoneSupport?"":"text-muted"}><span className="fa-li"><i className={data.isphoneSupport?"fas fa-check":"fas fa-times"}></i></span>{data.phoneSupport}</li>
              <li className={data.issubdomain?"":"text-muted"}><span className="fa-li"><i className={data.issubdomain?"fas fa-check":"fas fa-times"}></i></span>{data.subdomain}</li>
              <li className={data.isreport?"":"text-muted"}><span className="fa-li"><i className={data.isreport?"fas fa-check":"fas fa-times"}></i></span>{data.report}</li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div></>
}

export default Card