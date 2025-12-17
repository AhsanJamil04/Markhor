"use client";

import { useState, FormEvent } from "react";

interface InquiryFormProps {
  itemName?: string;
  onSuccess?: () => void;
}

export default function InquiryForm({ itemName = "", onSuccess }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    contactMethod: "",
    itemOfInterest: itemName,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          country: "",
          contactMethod: "",
          itemOfInterest: itemName,
          message: "",
        });
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7 animate-fade-in">
      <div className="mb-8 pb-6 border-b border-gray-200">
        <div className="flex items-center mb-3">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-glow">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Send an Inquiry</h3>
            <p className="text-gray-600 text-sm mt-1">Fill out the form below and we'll get back to you soon.</p>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          required
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="input-field"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
          Country <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="country"
          required
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          className="input-field"
          placeholder="Enter your country"
        />
      </div>

      <div>
        <label htmlFor="contactMethod" className="block text-sm font-semibold text-gray-700 mb-2">
          Preferred Contact Method <span className="text-red-500">*</span>
        </label>
        <select
          id="contactMethod"
          required
          value={formData.contactMethod}
          onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
          className="input-field"
        >
          <option value="">Select a method</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
        </select>
      </div>

      <div>
        <label htmlFor="itemOfInterest" className="block text-sm font-semibold text-gray-700 mb-2">
          Item of Interest
        </label>
        <input
          type="text"
          id="itemOfInterest"
          value={formData.itemOfInterest}
          onChange={(e) => setFormData({ ...formData, itemOfInterest: e.target.value })}
          className="input-field"
          placeholder="Leave blank if general inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="input-field resize-none"
          placeholder="Please provide details about your inquiry..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-2 border-green-300 text-green-800 px-8 py-6 rounded-2xl animate-scale-in shadow-elegant">
          <div className="flex items-start">
            <div className="bg-green-500 rounded-full p-2 mr-4 shadow-glow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg mb-1">Thank you for your inquiry!</p>
              <p className="text-sm text-green-700">We will contact you soon using your preferred method.</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-gradient-to-r from-red-50 via-rose-50 to-red-50 border-2 border-red-300 text-red-800 px-8 py-6 rounded-2xl animate-scale-in shadow-elegant">
          <div className="flex items-start">
            <div className="bg-red-500 rounded-full p-2 mr-4 shadow-glow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg mb-1">Error submitting inquiry</p>
              <p className="text-sm text-red-700">Please try again or contact us directly.</p>
            </div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          "Submit Inquiry"
        )}
      </button>
    </form>
  );
}
