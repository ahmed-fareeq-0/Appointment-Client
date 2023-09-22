import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, sizes } from '../constants/theme';

const TermsOfServiceScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>شروط الخدمة</Text>
            <Text style={styles.termsText}>
                <Text style={styles.unit}>الموافقة على الشروط: </Text>
                يجب أن توافق على هذه الشروط والأحكام قبل استخدام التطبيق. يتوجب عليك.
            </Text>
            <Text style={styles.termsText}>
                <Text style={styles.unit}>الحجز وادارة المواعيد: </Text>
                يتيح التطبيق إمكانية حجز مواعيد مع الأطباء. يجب أن يتم التعامل مع هذه المواعيد.
            </Text>
            <Text style={styles.termsText}>
                <Text style={styles.unit}>المعلومات الشخصية: </Text>
                قد يتطلب التطبيق تقديم معلومات شخصية. يجب عليك توفير معلومات دقيقة.
            </Text>
            <Text style={styles.termsText}>
                <Text style={styles.unit}>التحديثات والتعديلات: </Text>
                يحتفظ مشغلو التطبيق بالحق في تحديث أو تعديل هذه الشروط والأحكام. يجب متابعة التحديثات والامتثال لها.
            </Text>
            <Text style={styles.termsText}>
                <Text style={styles.unit}>مسؤولية المستخدم: </Text>
                يتحمل المستخدم المسؤولية الكاملة عن استخدام التطبيق وتعامله مع الأطباء.
            </Text>
            <Text style={styles.termsText}>
                <Text style={styles.unit}>سياسة المستخدم: </Text>
                يجب قراءة وفهم سياسة الخصوصية المتاحة في التطبيق والمتعلقة بجمع واستخدام المعلومات الشخصية.
            </Text>
            <Text style={styles.footerText}>
                نأمل منك الامتثال لهذه الشروط والأحكام أثناء استخدام التطبيق. شكرًا لاختيارك تطبيق حجز موعد مع الطبيب.
            </Text>
        </ScrollView>
    );
};

export default TermsOfServiceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    title: {
        fontSize: sizes.h1,
        color:colors.blue2,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign:'center'
    },
    termsText: {
        fontSize: sizes.h3,
        padding: sizes.spacing,
        textAlign: 'left',
        color: colors.gray3
    },
    footerText: {
        fontSize: sizes.h3,
        textAlign: 'center',
        color:colors.gray3,
        fontWeight:'bold',
        marginTop:18
    },
    unit: {
        // color: colors.blue2,
        color:colors.black,
        fontWeight: 'bold',
        fontSize: sizes.h3,
    }
})
