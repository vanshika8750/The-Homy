import React from "react";
import "./Policies.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy content-below-navbar">
      <div className="head-policy">
        <div className="head">Privacy Policy</div>
        <div className="line"></div>
      </div>

      <div className="content-policies">
        <div className="para">
          Welcome to TheHomy, a dedicated service provider committed to
          safeguarding your privacy. This comprehensive Privacy Policy is
          designed to transparently communicate how we gather, utilize, and
          protect your information when you engage with our website.
        </div>

        <div className="para">
          <div className="head-div">Information Collected</div>
          <div>
            We employ various methods to collect both personal and non-personal
            information to enhance your user experience:
          </div>

          <div>
            <ul>
              <li>
                Personal Information: This includes but is not limited to your
                name, contact details, and other relevant information
                voluntarily provided through forms on our website.
              </li>
              <li>
                Non-Personal Information: We leverage cookies and similar
                technologies, as detailed in our Cookie Policy, during your
                website visit to gather information that does not personally
                identify you but aids in optimizing our services.
              </li>
            </ul>
          </div>
        </div>

        <div className="para">
          <div className="head-div">Use of Information</div>
          <div>
            Your data serves multiple essential purposes within our operations:
          </div>
          <div>
            <ul>
              <li>
                Personalization: We use your information to tailor our services,
                providing a more personalized and relevant experience.
              </li>
              <li>
                Analytics: Aggregated data is employed for analytics, aiding in
                our website's continuous improvement and optimization.
              </li>
            </ul>
          </div>
        </div>

        <div className="para">
            <div className="head-div">
            Data Sharing
            </div>
            <div>
            We prioritize the confidentiality of your information and may share data with trusted third parties strictly for specific purposes, such as marketing and analytics. We assure you that user privacy remains a paramount concern.
            </div>
        </div>

        <div className="para">
            <div className="head-div">
            Security Measures
            </div>
            <div>
            The protection of your information is of utmost importance to us. We employ robust security measures to prevent unauthorized access, ensuring the confidentiality and integrity of your data. Our security protocols are regularly updated to align with industry standards.
            </div>
        </div>

        <div className="para">
            <div className="head-div">
            User Rights
            </div>
            <div>
            We recognize and respect your rights regarding your data. You have the right to access, modify, or delete your personal information. Please feel free to contact us for any privacy-related requests, and we will promptly address your concerns.
            </div>
        </div>


        <div className="para">
            <div className="head-div">
            Children's Privacy
            </div>
            <div>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under 13. If you are a parent or guardian and know that your child has provided us with personal data, please get in touch with us. Suppose we become aware that we have collected personal data from anyone under the age of 13 without verification of parental consent, in that case, we remove that information from our servers. If we need to rely on consent as a legal basis for processing our information and your country requires consent from a parent, we may require your parent's consent before we collect and use that information.

            </div>
        </div>

        <div className="para">
            <div className="head-div">
            Updates to the Policy
            </div>
            <div>
            This Privacy Policy is a living document and may be updated periodically. Users will be informed of any changes through notifications prominently displayed on our website. We encourage you to review the policy regularly to stay informed about how your data is being handled.
            </div>
        </div>

        <div className="para">
            <div className="head-div">
            Contact Information
            </div>
            <div>
            For any privacy concerns, queries, or requests related to your information, please don't hesitate to reach out to us at info@thehomy.in. We are dedicated to ensuring a transparent and responsive communication channel for all privacy matters.
            </div>
        </div>

        <div className="para">
            <div className="head-div">
            Legal Compliance
            </div>
            <div>
            We are committed to adhering to all relevant privacy laws and regulations. Our practices are designed to safeguard your rights and information in compliance with applicable legal frameworks.
            </div>
        </div>



      </div>
    </div>
  );
};

export default PrivacyPolicy;
