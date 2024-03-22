import React, { useContext } from "react";
import { Button, Text, Img } from "./..";
import { signOut } from "firebase/auth";
import auth from "firebase.init";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthContext from "context/AuthContext";

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
      {...props}
      className={` w-full h-200 head bg-[url(images/header.webp)]`}
    >
      <div className="pl-24 pr-24 mr-auto pb-3 ">
        <div className="flex  justify-between items-center w-full py-3 mx-auto max-w-[1427px]">
          <Img
            src="images/img_citygel_2_white.png"
            alt="citygel2white"
            className="w-[15%] object-cover"
          />
          <div className="w-full flex gap-6 flex-wrap items-center justify-end ">
            {user?.uid && tuser ? (
              <div onClick={handleSignOut}>
                <Text
                  size="2xl"
                  as="p"
                  className=" cursor-pointer font-poppins !text-gray-50 text-center"
                >
                  Sign Out
                </Text>
              </div>
            ) : (
              <div onClick={() => navigate("/login")}>
                <Text
                  size="2xl"
                  as="p"
                  className="cursor-pointer font-poppins !text-gray-50 text-center"
                >
                  Login or Sign up
                </Text>
              </div>
            )}

            <div className="flex flex-row justify-between items-center w-[22%]   p-[3px] border-white-A700 border border-solid rounded-[25px]">
              <div className="flex flex-col items-center justify-start h-[44px] w-[44px] p-2.5 border-white-A700 border border-solid bg-white-A700 rounded-[50%]">
                <Img
                  src="images/location.png"
                  alt="arrowdown_one"
                  className="h-[20px]"
                />
              </div>

              <Text as="p" className="pr-6">
                Change Location
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full mb-2 mt-8 mx-auto max-w-[1685px]">
          <div className="flex flex-row justify-between w-auto gap-[70px]">
            <a href="#">
              <Text size="2xl" as="p">
                Real Estate
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p">
                Vehicle
              </Text>
            </a>
            <a href="#">
              <Text size="2xl" as="p">
                Job
              </Text>
            </a>
          </div>
          <Button
            onClick={() => navigate("/add-post")}
            color="red_A400_01"
            size="4xl"
            variant="fill"
            className="font-aleo font-bold min-w-[210px]"
          >
            Post an ad
          </Button>
        </div>
      </div>
    </header>
  );
}
