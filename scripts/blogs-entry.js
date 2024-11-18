document.addEventListener('DOMContentLoaded', () => {
    const blogTitle = document.getElementById('blog-title');
    const blogImage = document.getElementById('blog-image');
    const blogContent = document.getElementById('blog-content');

    // Example blog data
    const blogData = {
        title: "Mastering Time Management",
        image: "/pexels-moose-photos-170195-1037993.jpg",
        content: `
            <p>In today's fast-paced world, managing time effectively has become crucial for achieving both personal and professional success. Whether you're juggling multiple projects, balancing work and personal life, or simply trying to make the most out of each day, mastering time management can significantly enhance your productivity and overall well-being.</p>
            <p>Here are some key strategies to help you master time management:</p>
            <h2>1. Set Clear Goals</h2>
            <p>Begin by defining clear, achievable goals. Knowing what you want to accomplish helps you focus and prioritize your tasks. Use the SMART criteria to set goals that are Specific, Measurable, Achievable, Relevant, and Time-bound.</p>
            <h2>2. Prioritize Tasks</h2>
            <p>Identify your most important tasks and tackle them first. Use techniques like the Eisenhower Matrix to categorize tasks based on their urgency and importance. This ensures that you address high-priority items before they become urgent.</p>
            <h2>3. Create a Schedule</h2>
            <p>Plan your day in advance by creating a schedule. Allocate specific time slots for different tasks and activities. Use tools like calendars, planners, or time management apps to organize your schedule and stay on track.</p>
            <h2>4. Avoid Multitasking</h2>
            <p>While multitasking may seem efficient, it often leads to decreased productivity and increased errors. Focus on one task at a time, complete it, and then move on to the next. This approach enhances concentration and improves the quality of your work.</p>
            <h2>5. Eliminate Distractions</h2>
            <p>Minimize distractions by creating a conducive work environment. Turn off notifications, set boundaries with others, and designate specific times for checking emails or social media. By reducing interruptions, you can maintain better focus and accomplish more in less time.</p>
            <h2>6. Take Breaks</h2>
            <p>Regular breaks are essential for maintaining productivity and preventing burnout. Incorporate short breaks into your schedule to recharge and relax. Techniques like the Pomodoro Technique, which involves working for 25 minutes and then taking a 5-minute break, can be highly effective.</p>
            <h2>7. Review and Adjust</h2>
            <p>Periodically review your progress and adjust your time management strategies as needed. Reflect on what works well and what needs improvement. This continuous evaluation helps you refine your approach and achieve better results over time.</p>
            <p>By implementing these strategies, you can gain better control over your time, reduce stress, and achieve a healthier work-life balance. Remember, mastering time management is an ongoing process, so be patient and persistent in your efforts.</p>
        `
    };

    // Populate the blog data
    blogTitle.textContent = blogData.title;
    blogImage.src = blogData.image;
    blogContent.innerHTML = blogData.content;
});