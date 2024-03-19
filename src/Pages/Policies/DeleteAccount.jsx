import React from 'react'
import './Policies.css'

const RefundPolicy = () => {
  return (
    <div className='policy content-below-navbar'>
        <div className="head-policy" style={{width:'fit-content'}}>
            <div className="head">Delete Your Account</div>
            <div className="line"></div>
        </div>

        <div className="content-policy">

<div className="para">
We understand that sometimes circumstances change and you may no longer wish to maintain an account with us. We respect your decision and aim to make the account deletion process as straightforward as possible.
</div>

<div className="para">
    <div className="head-div">
    Before proceeding with the deletion of your account, please consider the following:
    </div>
    <div><ol>
        
        <li>
        Data Removal : Deleting your account will result in the permanent removal of all associated data, including your profile information, preferences, and any content you may have uploaded or shared. This action cannot be undone.
        </li>
        <li>Loss of Access : Once your account is deleted, you will no longer have access to any services or features associated with it. This includes any purchases, subscriptions, or benefits tied to your account.</li>
        <li>Recovery : Deleted accounts cannot be recovered. If you wish to continue using our services in the future, you will need to create a new account.</li></ol></div>
</div>

<div className="para">
    <div className="head-div">
    To proceed with the deletion of your account, please follow these steps:
    </div>
    <div>
        <div>
<ol><li>Login to your account.</li>
<li>Go to your profile.</li>
<li>Click on Delete Profile Option.</li>
<li>Confirm that you want to delete the account.</li>
</ol>
        </div>

        <div>OR</div>

        <div>
        To initiate the deletion of your account, please submit a written request to [support@thehomy.in] . We will get back to you.
        </div>
</div>
</div>



<div className="para">
Thank you for choosing TheHomy for your service needs.
</div>


        </div>
    </div>
  )
}

export default RefundPolicy