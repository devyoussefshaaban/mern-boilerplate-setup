const translations = {
  en: {
    email_already_exists:
      "User with same email is exist, please, register with another email address",
    username_already_exists:
      "User with same name is exist, please, register with another username",
    registered_successfully: "Registered successfully.",
    user_not_exists: "User not exists",
    in_correct_password: "Incorrect password",
    logged_in_successfully: "Logged in successfully",
  },
  ar: {
    email_already_exists:
      "هذا الإيميل تم استخدامه بواسطة مستخدم آخر ,من فضلك قم باستخدام إيميل آخر",
    username_already_exists:
      "هذا الإسم تم استخدامه بالفعل بواسطة مستخدم آخر , من فضلك قم باستخدام إسم آخر",
    registered_successfully: "تم إنشاء حساب جديد بنجاح",
    user_not_exists: "مستخدم غير موجود",
    in_correct_password: "كلمة مرور غير صحيحة",
    logged_in_successfully: "تم تسجيل الدخول بنجاح",
  },
};

const getMessage = (lang, key) =>
  translations[lang]?.[key] || translations.en[key];

export { getMessage };
