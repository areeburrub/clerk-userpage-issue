'use client'

import { UserButton } from '@clerk/nextjs'
import { SelectDemo } from '@/components/profile-form';
import { Factory } from 'lucide-react';

export const UserBtn = () => {
    return(

        <UserButton>
            <UserButton.UserProfilePage label='About You' url='about' labelIcon={<Factory/>}>
                    <SelectDemo/>
            </UserButton.UserProfilePage>
        </UserButton>
    )
}

