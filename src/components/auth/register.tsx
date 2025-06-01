import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // Assuming these are available from your Shadcn UI setup


// Main App Component
const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentNumber: '',
    course: '',
    year: '',
    birthday: '',
    accountEmail: '', // Field for account creation email
    password: '',     // Field for account password
    confirmPassword: '', // Field for password confirmation
  });

  const totalSteps = 2; // Still 2 steps
  const progressValue = (step / totalSteps) * 100;

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Special handler for Shadcn Select component as it doesn't use e.target.id/value directly
  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      course: value,
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.studentNumber || !formData.course || !formData.year || !formData.birthday) {
        alert('Please fill in all personal information fields.');
        return;
      }
    } else if (step === 2) {
      // Validation for account creation fields
      if (!formData.accountEmail || !formData.password || !formData.confirmPassword) {
        alert('Please fill in all account creation fields.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
      // Basic password strength check
      if (formData.password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }
    }
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = () => {
    // In a real application, you would send formData to a server
    console.log('Form Submitted:', formData);
    alert('Form submitted successfully! Check the console for data.');
    // Optionally reset form or redirect
    setFormData({
      firstName: '',
      lastName: '',
      studentNumber: '',
      course: '',
      year: '',
      birthday: '',
      accountEmail: '',
      password: '',
      confirmPassword: '',
    });
    setStep(1); // Go back to the first step
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Provide your basic personal details.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {/* First Name and Last Name on the same line */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
                </div>
              </div>
              {/* Student Number field */}
              <div className="grid gap-2">
                <Label htmlFor="studentNumber">Student Number</Label>
                <Input id="studentNumber" value={formData.studentNumber} onChange={handleChange} placeholder="e.g., 2023-0001" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="course">Course</Label>
                <Select onValueChange={handleSelectChange} value={formData.course}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                    <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                    <SelectItem value="Business Administration">Business Administration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Year and Birthday on the same line */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" type="number" value={formData.year} onChange={handleChange} placeholder="e.g., 2025" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="birthday">Birthday</Label>
                  <Input id="birthday" type="date" value={formData.birthday} onChange={handleChange} />
                </div>
              </div>
            </CardContent>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader>
              <CardTitle>Create Your Account</CardTitle>
              <CardDescription>Enter your email and create a password.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="accountEmail">Email</Label>
                <Input id="accountEmail" type="email" value={formData.accountEmail} onChange={handleChange} placeholder="your.email@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={formData.password} onChange={handleChange} placeholder="********" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="********" />
              </div>
              <div className="flex items-center justify-center mt-4">
                <Button variant="outline" className="w-full">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 272.3c0-18.7-1.5-36.9-4.7-54.7H272.2v104.8h147c-6.1 33.8-25.7 63.7-55.7 84.1l-.1.1 83.9 65.3.5.7c51.7-48 81.9-118.8 81.9-200.3z" fill="#4285F4"/><path d="M272.2 544.3c73.4 0 135.3-24.1 180.4-65.7l-83.9-65.3c-22.3 14.9-50.6 23.8-89.6 23.8-69 0-127.3-46.7-148.8-109.3l-84.3 65.6c44.8 88.4 138.2 148.2 248.1 148.2z" fill="#34A853"/><path d="M123.4 345.3c-11.1-33.8-11.1-70.6 0-104.4L39.9 175.7C14.7 229.4 14.7 314.9 39.9 368.6l83.5-65.3z" fill="#FBBC05"/><path d="M272.2 109.3c37.4 0 70.5 12.9 96.6 37.9L429.2 73c-54.7-51.1-127.1-82.9-200.5-82.9C134 0 40.7 59.8 0 148.2l83.5 65.6c21.5-62.6 79.8-109.3 148.7-109.3z" fill="#EA4335"/></svg>
                  Login with Google
                </Button>
              </div>
            </CardContent>
          </>
        );
      case 3: // This is now the Review step
        return (
          <>
            <CardHeader>
              <CardTitle>Review Your Information</CardTitle>
              <CardDescription>Please review the details before submitting.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-2">
                <Label>First Name:</Label>
                <span>{formData.firstName}</span>
                <Label>Last Name:</Label>
                <span>{formData.lastName}</span>
                <Label>Student Number:</Label>
                <span>{formData.studentNumber}</span>
                <Label>Course:</Label>
                <span>{formData.course}</span>
                <Label>Year:</Label>
                <span>{formData.year}</span>
                <Label>Birthday:</Label>
                <span>{formData.birthday}</span>
                <Label>Account Email:</Label>
                <span>{formData.accountEmail}</span>
                {/* Password is not displayed for security reasons */}
              </div>
            </CardContent>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-md">
        <Card className="w-full rounded-lg shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-3xl font-bold text-gray-800">Multi-Part Form</CardTitle>
            <CardDescription className="text-center text-gray-600">Step {step} of {totalSteps}</CardDescription>
            <Progress value={progressValue} className="w-full mt-4 h-2 rounded-full bg-blue-200" />
          </CardHeader>
          {renderStepContent()}
          <CardFooter className="flex justify-between mt-4">
            <Button
              onClick={handlePrevious}
              disabled={step === 1}
              variant="outline"
              className="px-6 py-2 rounded-md transition-all duration-200 ease-in-out hover:scale-105"
            >
              Previous
            </Button>
            {step < totalSteps ? (
              <Button
                onClick={handleNext}
                className="px-6 py-2 rounded-md bg-foreground text-white hover:bg-foreground transition-all duration-200 ease-in-out hover:scale-105"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="px-6 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-all duration-200 ease-in-out hover:scale-105"
              >
                Submit
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default App;
