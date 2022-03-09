import {
    BurgerIcon,
    EmailInput,
    PasswordInput,
    Button,
    Input
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import React, { useCallback, useState } from "react";
  import styles from "./login.module.css";
  
  export function RegisterPage() {
    const [form, setValue] = useState({ email: "", password: "", name:"" });
  
    const onChange = (e) => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
  
    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>Регистрация</h2>
        <div className="mb-6">
        <Input
      type={'text'}
      placeholder={'Имя'}
      onChange={e => setValue(e.target.value)}
      
      value={form.name}
      name={'name'}
      error={false}
    //   ref={inputRef}
    //   onIconClick={onIconClick}
      errorText={'Ошибка'}
      size={'default'}
    />
    </div>
        <EmailInput onChange={onChange} value={form.email} name={"email"} />
       <div className="mt-6 mb-6">
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={"password"}
        />
        </div>
        <Button type="primary" size="medium">
        Зарегистрироваться
        </Button>
  
        <p className={styles.p + " mt-20 mb-4"}>Уже зарегистрированы? <a className={styles.a}>Войти</a></p>
        
      </div>
    );
  }
  