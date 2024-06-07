import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
    <div style={{display: 'flex'}}>
    <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h6 className="card-title">FREE</h6>
    <h3 className="card-title">$0/month</h3>
    <ul>
      <li><small>Single User</small></li>
      <li><small>50GB Storage</small></li>
      <li><small>Unlimited Public Projects</small></li>
      <li><small>Community Access</small></li>
      <li><small>Unlimited Private Projects</small></li>
      <li><small>Dedicated Phone Support</small></li>
      <li><small>Free Subdomain</small></li>
      <li><small>Monthly status reports</small></li>
    </ul>
    <div><a href="#" class="btn btn-primary" style={{marginTop: '50px'}}>Button</a>
    </div>
  </div>
</div>
<div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h6 className="card-title">PLUS</h6>
    <h3 className="card-title">$9/month</h3>
    <ul>
      <li><small>5 Users</small></li>
      <li><small>50GB Storage</small></li>
      <li><small>Unlimited Public Projects</small></li>
      <li><small>Community Access</small></li>
      <li><small>Unlimited Private Projects</small></li>
      <li><small>Dedicated Phone Support</small></li>
      <li><small>Free Subdomain</small></li>
      <li><small>Monthly status reports</small></li>
    </ul>
    <a href="#" class="btn btn-primary" style={{marginTop: '25px'}}>Button</a>
    </div>
  </div>
  <div className="card" style={{width: '18rem', marginTop: '30px', marginLeft: '20px'}}>
  <div className="card-body">
    <h6 className="card-title">PRO</h6>
    <h3 className="card-title">$49/month</h3>
    <ul>
      <li><small>Unlimited Users</small></li>
      <li><small>50GB Storage</small></li>
      <li><small>Unlimited Public Projects</small></li>
      <li><small>Community Access</small></li>
      <li><small>Unlimited Private Projects</small></li>
      <li><small>Dedicated Phone Support</small></li>
      <li><small>Free Subdomain</small></li>
      <li><small>Monthly status reports</small></li>
    </ul>
    <a href="#" class="btn btn-primary" style={{marginTop: '25px'}}>Button</a>
    </div>
  </div>
  </div>
    </>
  )
}

export default App
