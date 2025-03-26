class MyHashSet {
    private: 
        static const int SIZE = 1000;
        vector<list<int>> table;
        int hashFunction(int key) {
            return key % SIZE ;
        }
public:
    MyHashSet(): table(SIZE) {
        
    }
    
    void add(int key) {
        int index = hashFunction(key);
        if (!contains(key)) {
            table[index].push_back(key);
        }
    }
    
    void remove(int key) {
        int index = hashFunction(key);
        table[index].remove(key);
        
    }
    
    bool contains(int key) {
        int index = hashFunction(key);

        for (int val : table[index]) {
            if (val == key) {
                return true;
            }
        }
        return false;
        
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */