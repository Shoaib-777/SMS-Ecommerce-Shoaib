'use server'

import { redirect } from "next/navigation";
import ConnectDB from "../DB/ConnectDB";
import Users from "../models/Users";
import bcrypt from 'bcrypt'
import { signIn } from "../auth";
import { toast } from "react-toastify";

export const AddUserf = async (formData,profiles) => {
  const { username, email,phone, password,} = Object.fromEntries(formData);
  try {
    await ConnectDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new Users({
          username, email, phone, password : hashedPassword, img:profiles
        })
        await newUser.save()
        console.log("user created succesfully ")
      } catch (err) {
        console.log('failed to create user', err)
        throw new Error("failed to create user")
      }
      redirect('/login')
    }

//next auth  
    export const authenticate = async (prevState,formData) => {
      const { email, password } = Object.fromEntries(formData);
  
      try {
          await signIn('credentials', { email, password });
          toast.success('Login Successfully');
      } catch (err) {
          if (err.message.includes('CredentialsSignin')) {
              return 'Invalid Email or Password!';
          }
          if (!err.message.includes('CredentialsSignin')) {
              return 'Login Successfully';
          }
          throw err;
      }
  }

