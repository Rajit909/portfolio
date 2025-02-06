import React from "react";
import { motion } from "framer-motion";
import { CalendarRange, GitBranch, GitCommitHorizontal, Star } from "lucide-react";

const Github = ({ username }) => {
  const [stats, setStats] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  if (loading) {
    return (
      <div className="p-4 sm:p-6 border-border/5">
        <div className=" animate-pulse space-y-4">
          <div className="bg-gray-500 h-4 bg-muted rounded w-3/4" />
          <div className="bg-gray-500 h-8 bg-muted rounded " />
          <div className="bg-gray-500 h-32 bg-muted rounded " />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 sm:p-6 border-border/5">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }
  // if(!stats) return null;
  return (
    <>
      <div className="p-4 sm:p-6  text-white border-borser/5 backdrop:blur-sm overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className=" flex items-center gap-3">
            <div className=" p-1 rounded-full bg-gray-400">
              <GitCommitHorizontal className=" w-4 h-4 sm:w-5 text-primary" />
            </div>
            <h3 className=" text-lg sm:text-xl font-semibold text-purple-100">
              Contribution activity
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className=" p-4 rounded-lg bg-gray-500 backdrop-blur-sm"
            >
              <CalendarRange className="w-4 h-4 sm:w-5 sm:h-5 mb-2 text-primary" />
              <p className=" text-sm text-muted-foreground">Current Streak</p>
              <p className=" text-xl sm:text-2xl font-bold text-primary">
                2025
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className=" p-4 rounded-lg bg-gray-500 backdrop-blur-sm"
            >
              <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 mb-2 text-primary" />
              <p className=" text-sm text-muted-foreground">Total Contribution</p>
              <p className=" text-xl sm:text-2xl font-bold text-primary">
                5
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className=" p-4 rounded-lg bg-gray-500 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 mb-2 text-primary" />
              <p className=" text-sm text-muted-foreground">Best Day</p>
              <p className=" text-lg sm:text-xl font-bold text-primary">
                50 commits
              </p>
            </motion.div>
          </div>
          <div className=" space-y-4">
                <h4 className=" text-sm font-medium text-muted-foreground">Last 30 Day's</h4>
                <div className="pb-4 overflow-x-auto">
                    <div className="grid grid-rows-1 grid-flow-col gap-1 min-w-[600px">
                        
                    </div>
                </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Github;
