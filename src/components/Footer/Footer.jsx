import React from "react";
import Link from "next/link";
import LinkedInIcon from "../../../public/images/linkedIn.svg";
import TwitterIcon from "../../../public/images/twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="mt-[58px] pt-[77px] pb-[73px] pr-[77px]">
        <div className="grid grid-cols-2">
          <div className="">
            <h2 className="font-['Nantes'] font-[400] text-[36px] text-black pr-[100px]">
              Experience remarkable WordPress products with a new level of
              power, beauty, and human-centered designs.
            </h2>
            <div className="mt-[300px]">
              <div className="flex items-center gap-[38px] text-[14px]  font-semibold">
                <p>
                  <Link className="text-[#9FA0A1]" href="#">
                    ©2024
                  </Link>
                </p>
                <p>
                  <Link className="text-[#9FA0A1]" href="#">
                    Terms of Use
                  </Link>
                </p>
                <p>
                  <Link className="text-[#9FA0A1]" href="#">
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <p className="mt-[21px] text-[14px] font-[400] max-w-[525px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaera
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-[116px]">
            <div>
              <p className="font-bold text-[20px] text-[#9FA0A1]">Jump to</p>
              <ul className="mt-[16px] flex flex-col gap-[16px] text-[#115CD9] text-[20px]">
                <li>
                  <Link className="text-[#115CD9]" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-[#115CD9]" href="#">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="text-[#115CD9]" href="#">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="text-[#115CD9]" href="#">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link className="text-[#115CD9]" href="#">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link className="text-[#115CD9]" href="#">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="max-w-[300px] address">
                <h5 className="font-bold text-[20px] text-[#191618]">
                  Cambridge
                </h5>
                <p className="mt-[8px] text-[20px] text-[#191618] leading-[30px]">
                  70728 Yost Burg, <br /> North Magdaleneview, <br /> UT
                  97952-2814
                </p>
              </div>
              <div className="mt-[24px] max-w-[300px] address">
                <h5 className="font-bold text-[20px] text-[#191618]">London</h5>
                <p className="mt-[8px] text-[20px] text-[#191618] leading-[30px]">
                  Suite 292 903 Stehr Streets, Langworthtown, SC 94577-9465
                </p>
              </div>
              <div className="mt-[24px] max-w-[300px] address">
                <h5 className="font-bold text-[20px] text-[#191618]">
                  San Francisco
                </h5>
                <p className="mt-[8px] text-[20px] text-[#191618] leading-[30px]">
                  19837 Gilberto Lodge, <br /> Lake Kendallville, <br />{" "}
                  Colorado - 97392, Bhutan
                </p>
              </div>
              <div className="mt-[24px] flex items-center gap-[30px]">
                <Link href="#">
                  <Image src={LinkedInIcon} alt="LinkedIn" />
                </Link>
                <Link href="#">
                  <Image src={TwitterIcon} alt="Twitter" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
