import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- Reusable Component for Counting Animation ---
const AnimatedCount = ({ value, suffix = '', duration = 2000 }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Triggers when 50% visible

  useEffect(() => {
    if (!isInView) return;

    // Convert string values (like "3.2M") to numbers for calculation
    let target = value;
    let displaySuffix = suffix;

    if (typeof value === 'string') {
      if (value.includes('M')) {
        target = parseFloat(value.replace('M', '')) * 1000000;
        displaySuffix = 'M+';
      } else if (value.includes('+')) {
        target = parseInt(value.replace('+', ''));
        displaySuffix = '+';
      } else {
        target = parseInt(value);
      }
    }

    const start = 0;
    const increment = target / (duration / 10); // Calculate increment for 10ms interval

    let count = start;
    
    // Check if counting is necessary (to prevent infinite loop if target is 0)
    if (target === 0) {
        setCurrentValue(0);
        return;
    }

    const interval = setInterval(() => {
      count += increment;
      if (count > target) {
        count = target;
        clearInterval(interval);
      }

      // Format the number back to its string representation
      let formatted = count.toLocaleString('en-US', { maximumFractionDigits: 1 });
      
      // Special handling to display 1.0M as 1.0M and not 1,000,000
      if (displaySuffix === 'M+' && target >= 1000000) {
          formatted = (count / 1000000).toFixed(1);
          // Only use the suffix if the number is large enough, or if it's the final target
          if (count >= 1000000 || formatted === (target / 1000000).toFixed(1)) {
              formatted += 'M';
          }
      }
      
      // Add the final suffix only once
      if (count === target) {
          formatted += suffix;
      }
      
      setCurrentValue(formatted);
      
    }, 10);

    return () => clearInterval(interval);
  }, [value, duration, isInView, suffix]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-extrabold">
      {typeof currentValue === 'number' ? currentValue.toLocaleString() : currentValue}
    </div>
  );
};

// --- Main Stats Component ---
export default function Stats() {
  return (
    <div className="container py-8 sm:py-12" style={{ color: "white" }}>
      {/* motion.div for the slide-in effect on the whole block */}
      <motion.div 
        className="bg-[#23336f] text-white rounded-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center shadow-2xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0.4 }} // Triggers when 40% is visible
      >
        <div className="text-center">
          {/* Stat 1: Countries */}
          <AnimatedCount value={185} suffix="+" />
          <div className="text-xs sm:text-sm mt-1">Countries Visa Information</div>
        </div>
        
        <div className="text-center">
          {/* Stat 2: Organizations */}
          <AnimatedCount value={1000} suffix="+" />
          <div className="text-xs sm:text-sm mt-1">Organizations Relying on Us</div>
        </div>
        
        <div className="text-center">
          {/* Stat 3: Travelers */}
          {/* Passing the value as a number here and letting the component handle formatting */}
          <AnimatedCount value={3200000} suffix="+" /> 
          <div className="text-xs sm:text-sm mt-1">Travelers Served from India</div>
        </div>
      </motion.div>
    </div>
  );
}