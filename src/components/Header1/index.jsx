import React, { useContext } from "react";
import { Button, Text, Img } from "./..";
import { signOut } from "firebase/auth";
import auth from "firebase.init";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthContext from "context/AuthContext";
import { downarrow,menu2 } from "assets/Allimages";
import SelectLanguage from "./select-language/SelectLanguage";

export default function Header1({ ...props }) {
  const navigate = useNavigate();
  let { logoutUser, tuser } = useContext(AuthContext);
  const [user] = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      logoutUser();
      await signOut(auth);
      console.log("signout", user);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  console.log(user);
  return (
    <header
      {...props} >
      <div className="w-full mq1050:px-6 px-14  py-5 h-[236px] mq1050:h-[185px] space-y-6 mq1050:space-y-4
      bg-gradient-to-r from-[#003E4C] form-95% to-cyan-800 to-5%
        mq500:hidden block">
        <div  className="flex justify-between flex-row mq500:hidden block">
          <Img
            src="images/img_citygel_2_white.png"
            alt="citygel2white"
            className="w-[195px] h-[66px]  mq1050:w-[165px] mq1050:h-[50px] mq800:w-[145px] mq800:h-[45px] object-cover shrink-0"
          />
          <div className="flex justify-end flex-row shrink w-[50%] mq800:w-[60%] mq1050:space-x-5 mq800:space-x-2 space-x-10">
            {user?.uid && tuser ? (
              <div onClick={handleSignOut}>
                <Text
                  size="2xl"
                  as="p"
                  className=" cursor-pointer mt-1 font-poppins !text-gray-50 text-center"
                >
                  Sign Out
                </Text>
              </div>
            ) : (
              <div onClick={() => navigate("/login")}>
                <Text
                  size="2xl"
                  as="p"
                  className="cursor-pointer mt-1 font-poppins !text-gray-50 text-center mq1050:text-[17px] mq800:text-[14px] font-medium"
                >
                  Login or Sign up
                </Text>
              </div>
            )}
            <div className="w-[220px] mq1050:w-[170px]  mq1050:h-[37px]  h-[45px] flex justify-between items-center
            border border-solid border-white-A700_63  rounded-3xl mq1050:px-1 py-4 pr-2  text-white-A700">

              <div className="w-[35px] h-[35px] mq1050:w-[30px] mq1050:h-[30px] mq1050:rounded-full border border-solid border-black-900_87 rounded-xl  ml-1 mq1050:mr-1
              flex justify-center items-center bg-white-A700 mq1050:ml-[-2px] "> 
                <Img
                  src="images/location.png"
                  alt="arrowdown_one"
                  className="h-[20px] mq1050:h-[17px] "
                />
              </div>

              <Text as="p" className="text-[18px] mq1050:text-[11px]">
                Change Location
              </Text>
              <img src={downarrow} 
                className="w-[10px] h-[7px] mr-1 mq1050:mr-[1px] mq800:mr-[2px]"
              />
            </div>
          </div>
        </div>
        <hr className="border-t-[1px]  border-solid border-blue_gray-100_75 opacity-25  mq500:hidden block" />
        {/*2nd foot part*/}
        <div className="flex flex-row justify-between  mq500:hidden block">
          <div className="flex justify-between items-center shrink">
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] mq800:text-[13px] font-thin mq1050:mr-4">
                Real Estate
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] mq800:text-[13px] font-thin  mq1050:mr-4" >
                Vehicle
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] mq800:text-[13px] font-thin mq1050:mr-4">
                Job
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p" className="mr-7 text-[20px] mq1050:text-[16px] mq800:text-[13px] font-thin mq1050:mr-4">
                classyfied(General catagory)
              </Text>
            </a>
          </div>
          <Button
            onClick={() => navigate("/add-post")}
            color="red_A400_01"
            // size="4xl"
            variant="fill"
            className="font-aleo font-bold w-[200px] h-[75px] text-[22px] shrink-0 mq1050:w-[150px] mq1050:h-[50px] 
            mq800:w-[130px] mq800:h-[43px] mq1050:text-[19px] mq800:text-[16px]"
          >
            Post an ad
          </Button>
        </div>
        
      </div>
      {/**MObile version */}
      <div className="hidden mq500:block    bg-steelblue-200 w-full h-[80px] px-3 py-3 flex justify-center items-center overflow-hidden">
       <div className="flex justify-between flex-row space-x-5 mq400:space-x-2 overflow-hidden">
       <div>
        <img
          src={menu2}
          className="w-[20px] h-[20px] mt-3"
        />
       </div>
       <div>
       <img src="images/img_citygel_2_white.png"
          alt="ksdfk"
          className="w-[117px] h-[53px] mt-[-2px] mq400:w-[90%] h-[45px]"
        />
       </div>
        <div className="w-[154px] mq400:w-[130px] mq400:h-[30px] h-[34px] flex justify-between items-center mt-[4px] mq400:mt-[7px]
            border border-solid border-white-A700_63  rounded-3xl  text-white-A700 ">
               
              <div className="w-[30px] h-[30px] mq400:w-[18%] mq400:h-[84%] rounded-full border border-solid border-black-900_87 rounded-xl 
             ml-[0.5px] mq400:ml-[1px] flex justify-center items-center bg-white-A700 "> 
                <Img
                  src="images/location.png"
                  alt="arrowdown_one"
                  className="w-[17px] h-[15px] mq400:h-[13px] mq400:w-[13px]"
                />
              </div>

              <Text as="p" className="text-[11px] mq400:text-[9px]">
                Change Location
              </Text>
              <img src={downarrow} 
                className="w-[9px] h-[6px] mr-1"
              />
            </div>
       </div>
     </div>
    </header>
  );
}
