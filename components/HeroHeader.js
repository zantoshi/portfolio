import React from "react";
import Image from "next/image";
import { MailPlus, Twitter, Linkedin, Github } from "lucide-react";

const PageHeader = ({ title, description }) => {
  return (
    <div className="flex py-5 justify-center">
      <div className="flex-col-12">
        <div className="text-center space-y-3">
          <div>
            <Image
              src="/assets/images/santos.png"
              className="rounded-lg mx-auto"
              width={200}
              height={200}
            />
          </div>
          <h1 className="text-4xl">{title}</h1>
          <div>
            <p className="text-lg mb-4">{description}</p>
            <div className="flex flex-row justify-center">
              <a
                href="mailto:santosdhernandez@gmail.com"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                <MailPlus />
              </a>
              <a
                href="https://twitter.com/5antoshernandez"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                <Twitter />
              </a>
              <a
                href="https://linkedin.com/in/santoslol"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/zantoshi"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
