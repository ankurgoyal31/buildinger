import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import AutoReveal from "./AutoReveal";
import InstagramSection from "./InstagramSection";

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="px-4 pt-40 sm:px-6 lg:px-20">
        <div className="max-w-5xl p-6 mx-auto bg-white sm:p-10">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Terms & Conditions
          </h1>

          <section className="space-y-6 leading-relaxed text-gray-700">
            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                1. Introduction
              </h2>
              <p>
                Welcome to our website. By accessing or using our services, you
                agree to be bound by these Terms and Conditions. If you do not
                agree with any part of the terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                2. Use of Website
              </h2>
              <p>
                You agree to use this website only for lawful purposes and in a
                way that does not infringe the rights of others or restrict
                their use of the website.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                3. Intellectual Property
              </h2>
              <p>
                All content, logos, designs, images, and text on this website
                are the intellectual property of the company and may not be
                copied, reproduced, or distributed without written permission.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                4. User Accounts
              </h2>
              <p>
                If you create an account, you are responsible for maintaining
                the confidentiality of your login credentials and for all
                activities that occur under your account.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                5. Payments & Pricing
              </h2>
              <p>
                All prices are subject to change without notice. We reserve the
                right to refuse or cancel any order at our discretion.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                6. Limitation of Liability
              </h2>
              <p>
                We shall not be liable for any indirect, incidental, or
                consequential damages arising out of your use of our website or
                services.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                7. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate access to our
                website without prior notice if you violate these Terms &
                Conditions.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                8. Governing Law
              </h2>
              <p>
                These terms shall be governed and interpreted in accordance with
                the laws of your country or state of operation.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                9. Changes to Terms
              </h2>
              <p>
                We may update these Terms & Conditions from time to time.
                Continued use of the website after changes implies acceptance of
                the updated terms.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                10. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms & Conditions, please
                contact us at{" "}
                <span className="font-medium">support@yourdomain.com</span>.
              </p>
            </div>
          </section>
        </div>
      </div>
      <AutoReveal>
        <InstagramSection />
      </AutoReveal>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
