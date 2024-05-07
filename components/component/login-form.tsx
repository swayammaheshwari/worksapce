"use client"
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LoginForm({ onClose }: any) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Login successful', await response.json());
        // Handle successful login, e.g., redirect to dashboard
      } else {
        console.error('Login failed');
        // Handle login failure, e.g., display error message
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" value={formData.password} onChange={handleChange} />
            </div>
            <Button className="w-full" type="submit">
              Sign In
            </Button>
            <Button onClick={onClose} className="w-full" type="button">
              Close
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
