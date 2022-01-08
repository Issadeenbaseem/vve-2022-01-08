import React from 'react'

export default function IndexServices() {
    return (
        <div>
            <section className="content-section-services-index">

  <div className="container">
    <div className="row align-items-center no-gutters">
		<div className="col-lg-5">
		<div className="tab-left">
			<h2>Services</h2>
				<ul className="tab-nav">
          <li ><a href="#tab01">Survey<h6>Survey of lands, buildings, etc.</h6></a></li>
          {/* <li className="active"><a href="#tab02">Design<h6>Architecture, Structure, MEP</h6></a></li> */}
          <li><a href="#tab03">Build<h6>A total or specific construction undertaking.</h6></a></li>
          <li><a href="#tab02">Design<h6>Architecture, Structure, MEP.</h6></a></li>
          <li><a href="#tab04">Maintain<h6>Total maintenance and care of buildings and structures</h6></a></li>
          <li><a href="#tab05">Consult<h6>Consulting services to realize your construction needs across the entire spectrum.</h6></a></li>
          <li><a href="#tab06">Audits<h6>Independent audits pertaining to construction work carried out</h6></a></li>
        </ul>
			</div>
		
		</div>
		
		<div className="col-lg-7">
			<div className="tab-right">
			 <div id="tab01" className="tab-item active-item"><img src="/images/services-surveying.jpg" alt="Image"/></div>
       
        <div id="tab02" className="tab-item"><img src="/images/services-design.jpg" alt="Image"/> </div>
       
        <div id="tab03" className="tab-item"><img src="/images/build.jpg" alt="Image"/> </div>
       
        <div id="tab04" className="tab-item"><img src="/images/main.jpg" alt="Image"/> </div>
        
        <div id="tab05" className="tab-item"><img src="/images/consult.jpg" alt="Image"/> </div>

        <div id="tab06" className="tab-item"><img src="/images/services-audits.jpg" alt="Image"/> </div>
        
			</div>
			
		</div>
		
    </div>
   
  </div>
  
</section>
        </div>
    )
}
