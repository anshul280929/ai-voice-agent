"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExpertList } from "@/services/Options";
import { UserButton, useUser } from "@stackframe/stack";

import React from "react";

function FeatureAssistant() {
  const user = useUser();
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-medium text-grey-500">My WorkSpace</h2>
          <h2 className="text-3xl font-bold">
            Welcome Back, {user?.displayName} 
          </h2>
        </div>
        <Button>Profile</Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 xl:gid-cols-5 gap-10 mt-10">
        {ExpertList.map((option,index)=>(
          <div key={index} className="p-3 bg-secondary rounded-3xl flex flex-col justify center items-center">
              <Image src={option.icon} alt={option.name} 
                width={150}
                height={150}
                className="h-[70px] w-[70px]"
              />
              <h2 className="mt-2">{option.name}</h2>
          </div>  
        ))}
      </div>
    </div>
  );
}

export default FeatureAssistant;
