"use client"
import React, { useEffect, useRef, useState } from 'react'
interface User {
    username: string,
    score: number
}
const alpha = ['a', 'b', 'c'];
const Leader = () => {
    const [user_list, setuser_list] = useState<User[]>([]);
    const lis = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const intersectionCallback = (entries: any[]) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // let elem = entry.target;
                // console.log(entries, entry);
                if (entry.intersectionRatio >= 0.9) {
                    const list : User[] = [];
                    for (let i = 0; i < 10; i++) {
                        list.push(get_more());
                    }
                    setuser_list((prev) => [...prev, ...list]);
                }
              }
            });
          };
        const observer = new IntersectionObserver(intersectionCallback,{threshold : 1.0})
        if(lis.current !== null) observer.observe(lis.current);
        const list = [];
        for (let i = 0; i < 200; i++) {
            list.push(get_more());
        }
        setuser_list(list);
        return () => {

        }
    }, [])

    function get_more(): User {
        let s = "";
        while (s.length < 5) {
            s += alpha[Math.floor(Math.random() * alpha.length)];
        }
        const score = Math.random() * 10;
        console.log(window.innerHeight)
        return { username: s, score };
        
    }

    // function handle_click(){
    //     const list : User[] = [user_list];
    //     for (let i = 0; i < 10; i++) {
    //         list.push(get_more());
    //     }

    //     setuser_list(list);
    // }
    // => 5 px => total height
    return (
        <div >
            <div>
                { user_list && user_list!.map((user: User) => {
                    return <div key={user.username}>{user.username} : {user.score}</div>
                })}
            </div>
            <div ref={lis} className='opacity-0 w-2.5 h-2'>More</div>
        </div>
    )
}

export default Leader
