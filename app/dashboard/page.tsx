// app/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/auth');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push('/');
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to your Dashboard
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          You are logged in as {user.email}
        </p>
        <div className="mt-6 text-center">
          <button
            onClick={handleSignOut}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}