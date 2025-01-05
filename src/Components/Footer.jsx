import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import AnchorLink from "react-anchor-link-smooth-scroll";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";
import ModalComponent from "./ModalComponent";

const Footer = () => {
  const [openTermModal, setOpenTermModal] = useState(false);
  const [openPolicyModal, setOpenPolicyModal] = useState(false);

  return (
    <footer className=" bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start justify-center lg:gap-8">
          <img
            src="/images/LogoWithBackground-removebg-preview.png"
            className=" h-[50px] "
            alt="ASI"
          />

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <AnchorLink href="#hero">
                  {" "}
                  <h2 className="text-2xl font-bold text-white">
                    Accurate Software & Integrators
                  </h2>
                </AnchorLink>

                <p className="mt-4 text-gray-500">
                  Your website is the center of your digital ecosystem; the
                  experience matters once a customer enters, just as much as the
                  perception they have of you before they walk through the door.
                </p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-500">Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className=" hover:underline">
                  <AnchorLink href="#hero">Home</AnchorLink>
                </li>

                <li className=" hover:underline">
                  {" "}
                  <AnchorLink href="#pricing">Pricing</AnchorLink>
                </li>

                <li className=" hover:underline">
                  {" "}
                  <AnchorLink href="#skills">Techstack</AnchorLink>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-500">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className=" hover:underline">
                  {" "}
                  <AnchorLink href="#about">Our Story</AnchorLink>
                </li>

                <li className=" hover:underline">
                  {" "}
                  <AnchorLink href="#service">Service</AnchorLink>
                </li>
                <li className=" hover:underline">
                  <AnchorLink href="#developer">Team</AnchorLink>
                </li>
                <li className=" hover:underline">
                  {" "}
                  <AnchorLink href="#features">Why Us</AnchorLink>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-500">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className=" hover:underline">
                  <AnchorLink href="#design">Design</AnchorLink>
                </li>
                <li className=" hover:underline">
                  <AnchorLink href="#project">Projects</AnchorLink>
                </li>
                <li className=" hover:underline">
                  <AnchorLink href="#contact">Contact</AnchorLink>
                </li>
              </ul>
            </div>

            <div className="  flex gap-5">
              <a
                target="_blank"
                aria-label="facebook"
                href="https://www.facebook.com/share/15VNuw4sKG/?mibextid=wwXIfr"
              >
                <FacebookRoundedIcon />
              </a>
              <a
                target="_blank"
                aria-label="instagram"
                href="https://www.instagram.com/accurate_software_/profilecard/?igsh=MWxraGF4NXI3NnFqYg=="
              >
                <InstagramIcon />
              </a>
              <a
                target="_blank"
                aria-label="mail"
                href="mailto:accuratesoftwareintegrators@gmail.com"
              >
                <MailRoundedIcon />
              </a>
              <a
                target="_blank"
                aria-label="whatsapp"
                href="whatsapp://send?text=Hello There!&phone=+918870895978"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; 2024. Accurate Software & Integrators. All rights reserved.
            </p>

            {openTermModal && (
              <ModalComponent
                onClose={() => setOpenTermModal(false)}
                title="Terms and Conditions"
                subtitle="Our companies terms and conditions"
                content="1. Acknowledgment
Clients must acknowledge that they have read and understood the terms before engaging in services. This section typically includes a statement that the client agrees to the terms laid out in the proposal.
2. Pricing
Clearly outline the pricing structure. This should include:
Total project cost as an estimate.
Payment schedule (e.g., 50% deposit before work begins, 25% upon review, and 25% upon completion) 12.
3. Payments
Detail payment methods, terms, and consequences of late payments. For instance:
Invoices issued with specific payment terms (e.g., net 7 days).
Rights reserved to suspend services for overdue invoices 12.
4. Service Delivery
Define what constitutes service delivery and client responsibilities:
Timeframes for project completion.
Client's obligation to provide necessary content and feedback promptly 23.
5. Completion & Termination
Outline the process for project completion and termination rights:
Confirmation of project completion.
Conditions under which either party may terminate the agreement 12.
6. Indemnification
Include clauses where clients agree to indemnify the company against claims arising from their actions or content provided 12.
7. Variation of Terms
State that the company reserves the right to modify terms, with written notice provided to clients 1.
8. Governing Law
Specify which jurisdiction's laws govern the agreement, providing clarity on legal recourse in case of disputes 12.
9. Intellectual Property Rights
Clarify ownership of intellectual property created during the project:
Company retains rights to its proprietary materials.
Client may be granted usage rights upon full payment 256.
10. Limitation of Liability
Limit liability for damages resulting from issues post-project completion, especially those caused by client modifications or third-party actions "
              />
            )}

            {openPolicyModal && (
              <ModalComponent
                onClose={() => setOpenPolicyModal(false)}
                title="Privacy Policy"
                subtitle="Our companies Privacy policy"
                content="1. Introduction
Purpose: Clearly state the purpose of the privacy policy.
Scope: Specify who the policy applies to (e.g., website visitors, clients).
2. Information Collection
Types of Data Collected: Detail the types of personal information collected, such as:
Name
Email address
Phone number
IP address
Payment information (if applicable)
Methods of Collection: Explain how information is collected, including:
Directly from users (e.g., forms)
Automatically through cookies and tracking technologies
3. Use of Information
Describe how the collected information will be used, including:
Providing services
Communicating with clients
Improving website functionality
Marketing purposes (if applicable)
4. Data Sharing and Disclosure
Third Parties: Specify if and with whom data may be shared, such as:
Service providers (e.g., payment processors)
Marketing partners
Legal Requirements: Mention circumstances under which data may be disclosed for legal reasons.
5. Data Security
Outline the measures taken to protect user data, including:
Encryption methods
Access controls
Regular security assessments
6. User Rights
Inform users about their rights regarding their personal data, including:
Right to access their data
Right to request corrections or deletions
Right to opt-out of marketing communications
7. Cookies and Tracking Technologies
Explain the use of cookies and similar technologies, including:
Types of cookies used (e.g., session cookies, persistent cookies)
Purpose of cookies (e.g., analytics, user preferences)
8. Changes to This Privacy Policy
State that the company reserves the right to modify the privacy policy.
Include how users will be notified of changes.
9. Contact Information
Provide contact details for users to reach out with questions or concerns regarding the privacy policy "
              />
            )}

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <button
                  onClick={() => setOpenTermModal(!openTermModal)}
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Terms & Conditions{" "}
                </button>
              </li>

              <li>
                <button
                  onClick={() => setOpenPolicyModal(!openPolicyModal)}
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Privacy Policy{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
