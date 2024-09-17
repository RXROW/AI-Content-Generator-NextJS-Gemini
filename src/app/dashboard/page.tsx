"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import SearchHero from './_components/SearchHero';
import TemplateList from './_components/TemplateList';

const Dashboard: React.FC = () => {
  const { user, isLoaded } = useUser(); 
  const [userSearchInput, setUserSearchInput] = useState<string>("");


  const router = useRouter();

  React.useEffect(() => {
    console.log('isLoaded:', isLoaded);
    console.log('user:', user);

    if (isLoaded) {
      if (!user) {
        // Redirect to sign-in page if user is not authenticated
        router.replace('/sign-in'); 
      }
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;  
  }

  if (!user) {
    return <div>Redirecting...</div>; 
  }

  return (
    <div>
      <SearchHero onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      <TemplateList userSearchInput={userSearchInput} />
      Dashboard
    </div>
  );
};

export default Dashboard;
