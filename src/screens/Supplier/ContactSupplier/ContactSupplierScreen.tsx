import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

// 导入类型定义
import { SupplierWithContacts } from '../../../types';

const ContactSupplierScreen: React.FC = () => {
  // 模拟供应商联系数据
  const contacts: SupplierWithContacts[] = [
    {
      id: 'CON-001',
      supplierId: 'SUP-001',
      supplierName: 'Apple Inc.',
      contacts: [
        {
          name: 'John Doe',
          position: '销售经理',
          phone: '+1 (408) 996-1010',
          email: 'john.doe@apple.com',
          preferred: true,
        },
        {
          name: 'Jane Smith',
          position: '技术支持',
          phone: '+1 (408) 996-2020',
          email: 'jane.smith@apple.com',
          preferred: false,
        },
      ],
      address: '1 Apple Park Way, Cupertino, CA 95014, USA',
      website: 'https://www.apple.com',
    },
    {
      id: 'CON-002',
      supplierId: 'SUP-002',
      supplierName: 'Samsung Electronics',
      contacts: [
        {
          name: 'Kim Min-joon',
          position: '销售总监',
          phone: '+82 2-2053-3000',
          email: 'kim.minjoon@samsung.com',
          preferred: true,
        },
      ],
      address: '129, Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea',
      website: 'https://www.samsung.com',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        {contacts.map((contact) => (
          <View key={contact.id} style={styles.supplierCard}>
            <View style={styles.supplierHeader}>
              <Text style={styles.supplierName}>{contact.supplierName}</Text>
            </View>
            
            <View style={styles.contactSection}>
              <Text style={styles.contactSectionTitle}>联系人</Text>
              {contact.contacts.map((person, index) => (
                <View key={index} style={styles.personCard}>
                  <View style={styles.personHeader}>
                    <Text style={styles.personName}>{person.name}</Text>
                    {person.preferred && (
                      <View style={styles.preferredBadge}>
                        <Text style={styles.preferredText}>首选</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.personPosition}>{person.position}</Text>
                  <View style={styles.contactInfo}>
                    <Text style={styles.contactItem}>电话: {person.phone}</Text>
                    <Text style={styles.contactItem}>邮箱: {person.email}</Text>
                  </View>
                  <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionButton}>
                      <Text style={styles.actionButtonText}>📞 拨打电话</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <Text style={styles.actionButtonText}>✉️ 发送邮件</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
            
            <View style={styles.addressSection}>
              <Text style={styles.sectionSubtitle}>公司地址</Text>
              <Text style={styles.addressText}>{contact.address}</Text>
            </View>
            
            <View style={styles.websiteSection}>
              <Text style={styles.sectionSubtitle}>官方网站</Text>
              <TouchableOpacity>
                <Text style={styles.websiteLink}>{contact.website}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  supplierCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  supplierHeader: {
    marginBottom: 15,
  },
  supplierName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  contactSection: {
    marginBottom: 15,
  },
  contactSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  personCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  personHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  personName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  preferredBadge: {
    backgroundColor: '#f4511e',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  preferredText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  personPosition: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  contactInfo: {
    marginBottom: 10,
  },
  contactItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  actionButtonText: {
    fontSize: 12,
    color: '#333',
  },
  addressSection: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 15,
    marginBottom: 15,
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  websiteSection: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 15,
  },
  websiteLink: {
    fontSize: 14,
    color: '#1976d2',
    textDecorationLine: 'underline',
  },
});

export default ContactSupplierScreen;
