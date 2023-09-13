'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from "next/navigation";
import style from "../css/modal.module.css";
export default function Modal({ children }) {
  const router = useRouter();
  const wrapper = useRef(null)
  const onDismiss = useCallback(() => {
    router.back()
  }, [router])
  const onClick= useCallback(
    (e) => {
      if ( e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss,wrapper]
  )
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])
  return (
    <div className={style.bg} onClick={onClick} ref={wrapper}>
      <div className={style.modalWrapper}>{children}</div>
    </div>
  );
}
