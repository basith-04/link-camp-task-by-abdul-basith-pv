'use client';

import React from 'react';

const ScheduleItem = ({ event, index }) => {
    return (
        <div className="flex gap-4 items-start group">
            <div className="w-16 flex-shrink-0 text-right pt-1 font-mono text-sm text-[#00629B] font-bold">
                {event.time}
            </div>
            <div className="flex-1 pb-6 border-l-2 border-gray-100 pl-6 relative last:border-0 last:pb-0">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#FFA400] group-hover:bg-[#FFA400] transition-colors"></div>
                <h4 className="font-semibold text-gray-800 text-lg group-hover:text-[#00629B] transition-colors">{event.title}</h4>
            </div>
        </div>
    );
};

export default ScheduleItem;
