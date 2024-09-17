"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import SearchHero from './_components/SearchHero';

const Dashboard: React.FC = () => {
  const { user, isLoaded } = useUser(); 
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
      <SearchHero/>
      Dashboard
    </div>
  );
};

export default Dashboard;
