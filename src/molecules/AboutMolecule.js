import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextAtom from '../atoms/textAtom';

const AboutMolecule = () => {
    return (
        <View>
            <TextAtom style={styles.description}>
                مرحبًا بك في تطبيق جدولة المواعيد لدينا، رفيقك الموثوق به لإدارة مواعيد طبيبك بكل سهولة وراحة.
            </TextAtom>
            <TextAtom style={styles.description}>
                استمتع بتجربة طريقة سلسة للحجز وإعادة الجدولة والبقاء على اطلاع دائم بمقدمي الرعاية الصحية لديك. للحصول على أي مساعدة، يرجى التواصل معنا على ahmed.fareeq.0@gmail.com
            </TextAtom>
        </View>
    );
};

const styles = StyleSheet.create({
    description: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
    },
});

export default AboutMolecule;
